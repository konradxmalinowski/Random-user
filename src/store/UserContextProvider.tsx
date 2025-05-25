import { useEffect, useState, createContext } from 'react';

export interface User {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  image: string;
}

interface Ctx {
  user: User;
  handleFetchUser: () => void;
}

export const UserContext = createContext<Ctx>({
  user: {
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    image: '',
  },
  handleFetchUser: () => {},
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();

  const handleFetchUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');

      if (response.ok) {
        const data = await response.json();

        const name = `${data?.results[0]?.name?.title ?? ''} ${
          data?.results[0]?.name?.first ?? ''
        } ${data?.results[0]?.name?.last ?? ''}`;
        const phone = data?.results[0]?.phone ?? '';
        const street = `${data?.results[0]?.location?.street.name ?? ''} ${
          data?.results[0]?.location?.street.number ?? ''
        }`;
        const city = data?.results[0]?.location?.city ?? '';
        const state = data?.results[0]?.location?.state ?? '';
        const image = data?.results[0]?.picture.large ?? '';

        const result: User = {
          name,
          phone,
          street,
          city,
          state,
          image,
        };

        setUser(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchUser();
  }, []);

  const userCtx: Ctx = {
    user: user ?? {
      name: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      image: '',
    },
    handleFetchUser,
  };

  return <UserContext value={userCtx}>{children}</UserContext>;
};

export default UserContextProvider;
