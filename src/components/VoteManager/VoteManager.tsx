//assets
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'

//types
import { Profile } from "../../types/models"
import { VoteManagerFormData } from '../../types/forms'

interface voteManagerProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => Promise<void>;
}

const voteManager = (props: voteManagerProps): JSX.Element => {
  const { profile, handleVote } = props

  const ratingOptions = [1, 2, 3, 4, 5]
  const voteCount = profile.votesReceived.length
  const voteSum: number = profile.votesReceived.reduce(
    (sum: number, v: { value: number }): number => {
      return sum + v.value
    },
    0
  )

  const profileRating = voteCount ? voteSum / voteCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)
    handleVote({ value: newValue, profileId: profile.id})
  }

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()} 
          key={rating}
          onClick={handleClick}
          src={rating <= profileRating ? bean : noBean}
          alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default voteManager