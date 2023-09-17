
interface IFlag {
  image: string
  isSelected: boolean
  onClick: React.MouseEventHandler<HTMLImageElement>
}

const Flag = ({ image, isSelected, ...props }: IFlag) => (
  <img alt="flag" src={image} className={isSelected ? 'flag selected' : 'flag'} {...props} />
)

export default Flag