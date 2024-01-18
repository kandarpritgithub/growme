import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const departmentData = [
  {
    "department": "customer_service",
    "sub_departments": ["support", "customer_success"]
  },
  {
    "department": "design",
    "sub_departments": ["graphic_design", "product_design", "web_design"]
  }
];

const DepartmentListComponent: React.FC = () => {
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleToggle = (department: string) => {
    if (openDepartments.includes(department)) {
      setOpenDepartments(openDepartments.filter(dep => dep !== department));
    } else {
      setOpenDepartments([...openDepartments, department]);
    }
  };

  const handleSelect = (department: string) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  const isDepartmentSelected = (department: string) => {
    return selectedDepartments.includes(department);
  };

  return (
    <List>
      {departmentData.map((departmentItem) => (
        <React.Fragment key={departmentItem.department}>
          <ListItem button onClick={() => handleToggle(departmentItem.department)}>
            <ListItemIcon>
              {isDepartmentSelected(departmentItem.department) ? (
                <CheckCircle color="primary" />
              ) : (
                <RadioButtonUnchecked />
              )}
            </ListItemIcon>
            <ListItemText primary={departmentItem.department} />
            {openDepartments.includes(departmentItem.department) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDepartments.includes(departmentItem.department)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {departmentItem.sub_departments.map((subDepartment) => (
                <ListItem
                  key={subDepartment}
                  button
                  onClick={() => handleSelect(subDepartment)}
                  style={{ paddingLeft: 30 }}
                >
                  <ListItemIcon>
                    {isDepartmentSelected(subDepartment) ? (
                      <CheckCircle color="primary" />
                    ) : (
                      <RadioButtonUnchecked />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentListComponent;
