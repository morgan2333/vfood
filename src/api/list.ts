import { request } from '@/utils/request';
import type { ListResult } from '@/api/model/listModel';

const Api = {
  BandList: '/brands',
};

export function getBrandList() {
  return request.get<ListResult>({
    url: Api.BandList,
  });
}
