import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          name={name}
          number={number}
          key={id}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
