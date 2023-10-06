import type { AllWeeklyLogs, TimeObject } from '../../server/database';

export const isObjectRecord
= (value: unknown): value is Record<string, unknown> => (
  typeof value === 'object'
  && value !== null
  && !Array.isArray(value)
);

export const isTimeArray = (value: unknown): value is TimeObject[] => {
  if (Array.isArray(value) && value[0] !== null && value[0] !== undefined) {
    if ('unixStart' in value[0]
    && 'unixEnd' in value[0]) {
      return true;
    }
  }
  return false;
};

export const isAllWeeklyLogsArray
 = (value: unknown): value is AllWeeklyLogs[] => {
   if (Array.isArray(value) && value[0] !== null && value[0] !== undefined) {
     if ('unixStart' in value[0] && 'unixEnd' in value[0]
    && 'submitted' in value[0] && 'invoiced' in value[0]
    && 'paid' in value[0] && 'username' in value[0] && 'email' in value[0]) {
       return true;
     }
   }
   return false;
 };
