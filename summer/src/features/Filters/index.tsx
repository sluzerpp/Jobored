import { Button, NumberInput, ResetFilterButton } from 'shared/ui';
import './index.scss';
import { SelectCustom } from 'shared/ui/select';
import { FilterParams } from 'shared/api';
import { memo, useState } from 'react';

type FiltersFeatureProps = {
  params: FilterParams;
  setParams: CallableFunction;
  selectOptions: {
    value: string;
    label: string;
  }[];
}

export const FiltersFeature = memo(({ params, setParams, selectOptions }: FiltersFeatureProps) => {
  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [branch, setBranch] = useState<string>('');

  const onSubmitClickHandler = () => {
    setParams({
      ...params,
      paymentFrom,
      paymentTo,
      branch: Number(branch),
    })
  };

  const onResetButtonClick = () => {
    setPaymentFrom('');
    setPaymentTo('');
    setBranch('');
    onSubmitClickHandler();
  }

  const onPaymentFromChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFrom(e.target.value);
  }

  const onPaymentToChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentTo(e.target.value);
  }

  return (
    <div className="filters">
      <div className="filters__header">
        <div className="filters__title">Фильтры</div>
        <ResetFilterButton onClick={onResetButtonClick}></ResetFilterButton>
      </div>
      <div className="filters__group">
        <div className="filters__group-title">Отрасль</div>
        <SelectCustom
          value={branch}
          setValue={setBranch}
          options={selectOptions}
        ></SelectCustom>
      </div>
      <div className="filters__group">
        <div className="filters__group-title">Оклад</div>
        <NumberInput
          value={paymentFrom}
          onChange={onPaymentFromChangeHandler}
          placeholder='От'
        ></NumberInput>
        <NumberInput
          value={paymentTo}
          onChange={onPaymentToChangeHandler}
          placeholder='До'
        ></NumberInput>
      </div>
      <Button onClick={onSubmitClickHandler}>Применить</Button>
    </div>
  )
});
