import { useContext, useState } from 'react';
import { UserContext } from '../store/UserContextProvider';
import Button from './Button';

const categories = ['Name', 'Phone', 'Street', 'City', 'State'] as const;

type Category = (typeof categories)[number];
type UserKey = 'name' | 'phone' | 'street' | 'city' | 'state';

const categoryToKeyMap: Record<Category, UserKey> = {
  Name: 'name',
  Phone: 'phone',
  Street: 'street',
  City: 'city',
  State: 'state',
};

const UserUI = () => {
  const [selectedItem, setSelectedItem] = useState<Category>('Name');
  const { user } = useContext(UserContext);

  const handleClick = (category: Category) => {
    setSelectedItem(category);
  };

  const buttons = categories.map((category) => (
    <Button
      category={category}
      key={category}
      handleClick={() => handleClick(category)}
    />
  ));

  const userKey = categoryToKeyMap[selectedItem];
  const value = user[userKey] ?? '';

  return (
    <section className="w-full h-full flex flex-col items-center justify-between">
      <div className="w-full h-36 mb-5 flex justify-center items-center">
        <img src={user.image} alt="user image" className="rounded-2xl" />
      </div>
      <div className="w-full min-h-28 flex flex-col items-center justify-between gap-2.5">
        <div className="w-full flex flex-col justify-center items-center gap-2.5">
          <p className="text-gray-500 text-center">My {userKey} is</p>
          <span className="font-bold text-4xl text-center">{value}</span>
        </div>
        <div className="w-full flex justify-center gap-2.5 items-center flex-wrap content-center my-5">
          {buttons}
        </div>
      </div>
    </section>
  );
};

export default UserUI;
