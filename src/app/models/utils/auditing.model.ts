export interface AuditingModel {
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
  version?: number;
  delete?: boolean;
}
