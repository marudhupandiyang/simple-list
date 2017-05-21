import React from 'react';
import SimpleList from '../src';
import './index.css';

class Example extends React.Component {
  render() {
    let items = [
      {
        id: 1,
        title: 'App Backup & Restore',
        subtitle: '2.25MB/3.9MB 57%',
        icon: '/backupandrestore.png'
      },
      {
        id: 2,
        title: 'Telegram',
        subtitle: 'Download pending..',
        icon: '/telegram.png'
      },
      {
        id: 3,
        title: 'Album',
        subtitle: 'Download pending..',
        icon: '/album.png'
      }
    ];

    return (
      <SimpleList
        title={`Updates available(${items.length})`}
        items={items}
        onItemClick={(item) => console.log(`Clicked item ${item.title}`)}
        itemActionClick={(item) => {console.log(`Action clicked for ${item.title}`)}}
        listAction={{
          title: 'STOP',
          action: () => {
            console.log('Clicked on list action');
          }
        }}
      />
    );
  }
}

export default Example;
