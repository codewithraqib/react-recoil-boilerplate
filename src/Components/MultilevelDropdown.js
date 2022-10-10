import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import axios from "axios";
import {set } from 'lodash'


  const MultilevelDropdown = () => {

    const DropItems = [
      <Dropdown.Item key={1}>Tutorials</Dropdown.Item>,
      <Dropdown.Item key={2}>Practice</Dropdown.Item>,
      <Dropdown.Item key={3}>Jobs</Dropdown.Item>,
  ];

    return(
      <div>
      {/* <Dropdown title="Multilevel">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Menu title="Item 2">
              <Dropdown.Item>Item 2A</Dropdown.Item>
              <Dropdown.Item>Item 2B</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Menu title="Item 4">
              <Dropdown.Menu title="Item 4A">
                  <Dropdown.Item>Item 4A-A</Dropdown.Item>
                  <Dropdown.Item>Item 4A-B</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Item>Item 4B</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown> */}

<div className="multi-level-dropdown-container" style={{  padding: 30, 
                              backgroundColor: 'lightblue', }}>
  
                    <Dropdown title="rightStart 1 hover" trigger="hover" 
                             placement="rightStart"  
                              style={{ marginRight: 10 }}>
                        {DropItems}
                    </Dropdown>
                    <Dropdown title="rightStart 2 hover" trigger="hover" 
                              placement="rightStart"  
                              style={{ marginRight: 10 }}>
                        {DropItems}
                    </Dropdown>
                    <Dropdown title="rightStart 3 hover" trigger="hover" 
                              placement="rightStart" 
                              style={{ marginRight: 10 }}>
                        {DropItems}
                    </Dropdown>

                    <Dropdown title="rightStart 4 hover" trigger="hover" 
                              placement="rightStart" >
                        {DropItems}
                        <Dropdown title="rightStart 4 hover" trigger="hover" 
                              placement="rightStart" >
                        {DropItems}
                        
                    </Dropdown>
                    </Dropdown>

                   
                </div>
      
  </div>
    )

  }



export default  MultilevelDropdown;
