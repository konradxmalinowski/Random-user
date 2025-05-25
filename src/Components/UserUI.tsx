import { useContext, useState } from 'react';
import { UserContext } from '../store/UserContextProvider';
import Button from './Button';

import type { User } from '../store/UserContextProvider';

const categories = ['Name', 'Phone', 'Street', 'City', 'State'];

const UserUI = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Name');
  const { user } = useContext(UserContext);

  const keyMap: Record<string, keyof User> = {
    name: 'name',
    phone: 'phone',
    street: 'street',
    city: 'city',
    state: 'state',
  };

  const handleClick = (category: string) => {
    setSelectedItem(category);
  };

  const buttons = categories.map((category) => (
    <Button
      category={category}
      key={category}
      handleClick={() => handleClick(category)}
      className=""
    />
  ));

  return (
    <section className="w-full h-full flex flex-col items-center justify-between">
      <div className="w-full h-36 mb-5 flex justify-center items-center">
        <img src={user.image} alt="user image" className="rounded-2xl" />
      </div>
      <div className="w-full min-h-28 flex flex-col items-center justify-between gap-2.5">
        <div className="w-full flex flex-col justify-center items-center gap-2.5">
          <p className="text-gray-500 text-center">
            My {selectedItem.toLowerCase()} is
          </p>
          <span className="font-bold text-4xl text-center">
            {keyMap[selectedItem.toLowerCase()]}
          </span>
        </div>
        <div className="w-full flex justify-center gap-2.5 items-center flex-wrap content-center my-5">
          {buttons}
        </div>
      </div>
    </section>
  );
};

export default UserUI;
