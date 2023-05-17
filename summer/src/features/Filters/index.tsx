import { Button, NumberInput, ResetFilterButton } from 'shared/ui';
import './index.scss';
import { SelectCustom } from 'shared/ui/select';
import { FilterParams } from 'shared/api';
import { memo, useState } from 'react';
import { CataloguesState } from 'app/store/types';

type FiltersFeatureProps = {
  params: FilterParams,
  setParams: React.Dispatch<React.SetStateAction<FilterParams>>;
  cataloguesData: CataloguesState;
}

export const FiltersFeature = memo(({ params, setParams, cataloguesData }: FiltersFeatureProps) => {
  const { payment_from, payment_to, catalogues } = params;
  const [paymentFrom, setPaymentFrom] = useState(payment_from ? String(payment_from) : '');
  const [paymentTo, setPaymentTo] = useState(payment_to ? String(payment_to) : '');
  const [branch, setBranch] = useState(catalogues ? String(catalogues) : '');

  const onSubmitClickHandler = () => {
    setParams && setParams((prev) => ({
      ...prev,
      payment_from: Number(paymentFrom),
      payment_to: Number(paymentTo),
      catalogues: Number(branch),
    }))
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
          options={
            cataloguesData.catalogues.map((el) => ({ label: el.title_rus, value: String(el.key) }))
          }
        ></SelectCustom>
      </div>
      <div className="filters__group">
        <div className="filters__group-title">Оклад</div>
        <NumberInput
          data-elem="salary-from-input"
          value={paymentFrom}
          onChange={onPaymentFromChangeHandler}
          placeholder='От'
        ></NumberInput>
        <NumberInput
        data-elem="salary-to-input"
          value={paymentTo}
          onChange={onPaymentToChangeHandler}
          placeholder='До'
        ></NumberInput>
      </div>
      <Button data-elem="search-button" onClick={onSubmitClickHandler}>Применить</Button>
    </div>
  )
});
