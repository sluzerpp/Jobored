import './index.scss';

type DetailedDescriptionProps = {
  text: string;
}

export const DetailedDescription = ({ text }: DetailedDescriptionProps) => {
  return (
    <div className='detailed-description' dangerouslySetInnerHTML={{ __html: text }}>
    </div>
  )
}
