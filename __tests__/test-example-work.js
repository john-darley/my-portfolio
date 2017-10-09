import React from 'react';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ExampleWork from '../js/example-work';


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
  }
];

describe ("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("should be a section element", () => {
    console.log(component.debug());
  });
});
