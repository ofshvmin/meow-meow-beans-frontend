//assets
import bean from '../../assets/icons/bean.png'
import nobean from '../../assets/icons/noBean.png'

//types
import { Profile } from "../../types/models"

interface voteManagerProps {
  profile: Profile;
}

const voteManager = (props: voteManagerProps): JSX.Element => {
  const { profile } = props

  const ratingOptions = [1, 2, 3, 4, 5]

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()} 
          key={rating}
          src={nobean}
          alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default voteManager