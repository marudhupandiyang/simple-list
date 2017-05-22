# React Simple list view
 This is a simple implementation of a two lined list view in react. It has an icon and an action button in each row.
 This is a preliminary implementation. PR's are welcome.

 ![Simple List view](http://i.imgur.com/NVyJ4DK.png)


 # Installation

     npm install awesome-react-list

or if you are using `yarn`

    yarn add awesome-react-list


 # Usage

     import SimpleList from 'awesome-react-list'

     <SimpleList
          title={`Items Pending(${items.length})`}
          items={items}
          onItemClick={(item) => console.log(`Clicked item ${item.title}`)}
          itemActionClick={(item) => {console.log(`Action clicked for ${item.title}`)}}
        />


You items should be of the below format.

      // declare the items your require
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

# Events

- `onItemClick` - This function is called when the user clicks on the row. The current `item` is passed down as an argument to the function.

- `itemActionClick` - This function is called when the `action` icon is clicked on the row.  The current `item` is passed down as an argument to the function.
