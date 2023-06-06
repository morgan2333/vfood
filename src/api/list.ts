import { request } from '@/utils/request';
import type { ListResult } from '@/api/model/listModel';

const Api = {
  BandList: '/brands',
  Test: '/get-purchase-list',
};

export function getBrandList() {
  return request.get<ListResult>({
    url: Api.Test,
  });
}
