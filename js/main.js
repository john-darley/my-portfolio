import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Cloud Formation",
    'image': {
      'desc': "snippet of CFN YAML code",
      'src': "images/cfn.png",
      'comment': ""
    }
  },
  {
    'title': "AWS AMI Userdata Powershell",
    'image': {
      'desc': "source code",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Microsoft WebOps - IIS internals",
    'image': {
      'desc': "image of the request processing model in IIS ",
      'src': "images/example1.png",
      'comment': ` “Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
