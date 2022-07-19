import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_VIEW_ICON = ['list', 'border-all'];

const FilterMenu = ({ onChange, filter }) => {
  return (
    <div className='filtering-menu mb-2'>
      <FontAwesomeIcon
        className='clickable hoverable'
        size='2x'
        icon={LIST_VIEW_ICON[filter.view.list]}
        onClick={() => {
          onChange('view', { list: +!filter.view.list });
        }}
      />
    </div>
  );
};

export default FilterMenu;
