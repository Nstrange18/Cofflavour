import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/ContactMethod.css"

const ContactMethods = ({icon, desc}) => {
  return (
    <>
      <div className="contact-methods">

        <div className="icon">
          <Icon icon={icon} />
        </div>

        <div className="description">
          {desc}
        </div>

      </div>
    </>
  )
}

export default ContactMethods