import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'services/usersApi';

export function useReadUsers() {
  const { isLoading, data: users, error } = useQuery(['projects'], getUsers);

  return { isLoading, error, users };
}
