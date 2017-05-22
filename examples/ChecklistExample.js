import React from 'react';
import SimpleList from '../src';
import './index.scss';

class Example extends React.Component {
  render() {
    let items = [
      {
        id: 1,
        title: 'Verify your email address',
        subtitle: 'Verification email sent',
        icon: '/Email-Logo.png'
      },
      {
        id: 2,
        title: 'Complete your profile',
        subtitle: 'Pending..',
        icon: '/avatar.png'
      },
      {
        id: 3,
        title: 'Complete atleast one task',
        subtitle: 'Pending..',
        icon: '/complete_task.png'
      }
    ];

    return (
      <SimpleList
        title={`Items Pending(${items.length})`}
        items={items}
        onItemClick={(item) => console.log(`Clicked item ${item.title}`)}
        itemActionClick={(item) => {console.log(`Action clicked for ${item.title}`)}}
      />
    );
  }
}

export default Example;
