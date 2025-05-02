import useNmSpace from "./useBem"
export const nm =useNmSpace('icon')

export const iconProps = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 12
    },
    color: {
      type: String
    }
  }
}