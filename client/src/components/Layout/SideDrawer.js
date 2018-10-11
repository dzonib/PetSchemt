import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  return (
    <Drawer
      anchor='left'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="ul">
        <ListItem button onClick={() => console.log('1')}>
          item 1
        </ListItem>
        <ListItem button onClick={() => console.log('2')}>
          item 2
        </ListItem>
        <ListItem button onClick={() => console.log('3')}>
          item 3
        </ListItem>
        <ListItem button onClick={() => console.log('4')}>
          item 4
        </ListItem>
        <ListItem button onClick={() => console.log('5')}>
          item 5
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer;