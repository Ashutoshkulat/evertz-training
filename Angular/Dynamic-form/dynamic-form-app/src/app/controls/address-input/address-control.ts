import { ControlBase } from '../control-base';

export interface AddressControl extends ControlBase {
  options?: {
    controlType: string;
    key: string;
    label: string;
    order: number;
    type: string;
    text: string;
  }[];
}
