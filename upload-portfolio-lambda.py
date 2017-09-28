import boto3
import StringIO
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:eu-west-1:147959420123:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.johndarley.info')
        build_bucket = s3.Bucket('portfoliobuild.johndarley.info')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip/portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
             for nm in myzip.namelist():
                 obj = myzip.open(nm)
                 portfolio_bucket.upload_fileobj(obj, nm)
                 portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Job Completed!!"
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully")
    except:
        topic.publish(Subject="Portfolio Delpoy Failed", Message="The Portfolio was NOT deployed successfully")
        raise
    return 'Hello from Lambda'
