import api from '../../utils/axios';

export const getListPlace = async (place: string): Promise<any> => {
  return await api.get('/list-place/', {
    params: { place }
  });
}
