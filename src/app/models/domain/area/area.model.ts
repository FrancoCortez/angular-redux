import { AuditingModel } from '../../utils/auditing.model';

export interface AreaModelDetail {
  _id?: string;
  auditing?: AuditingModel;
  name?: string;
  description?: string;
}
