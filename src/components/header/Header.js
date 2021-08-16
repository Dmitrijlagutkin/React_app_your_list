import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../common/button/Button"
import useStyles from "./headerStyles"
import Paper from "@material-ui/core/Paper"
import Modal from "../common/modal/Modal"
import MyInput from "../common/input/Input"
import { validateEmail } from "../../halpers/validation"
import { selectUserList } from "../../redux/reducers/dataSlice"
import emailjs from "emailjs-com"

const Header = ({ titleText }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const userList = useSelector(selectUserList)
    const [isOpenEmailModal, setIsOpenEmailModal] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [userEmailDirty, setUserEmailDirty] = useState(false)
    const [userEmailError, setUserEmailError] = useState(
        validateEmail(userEmail)
    )

    const onClickIsOpenEmailModal = () => {
        setIsOpenEmailModal(!isOpenEmailModal)
    }

    const blurHandler = () => {
        setUserEmailDirty(true)
    }

    const onChangeEmailHandler = (e) => {
        setUserEmail(e.target.value)
        setUserEmailError(validateEmail(userEmail))
    }

    // const templeteParams = JSON.stringify(userList)
    // console.log(templeteParams)

    // function sendEmail(templeteParams) {
    //     // e.preventDefault()

    //     emailjs
    //         .sendForm(
    //             "service_fku0dx4",
    //             "template_6v8q34e",
    //             templeteParams,
    //             "user_jOur6AseerULiyKhFnWBs"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text)
    //             },
    //             (error) => {
    //                 console.log(error.text)
    //             }
    //         )
    // }

    const onClikSendEmail = () => {
        // sendEmail(templeteParams)
        setIsOpenEmailModal(!isOpenEmailModal)
    }

    return (
        <div>
            <Paper elevation={3}>
                <div className={classes.header}>
                    <h2>{titleText}</h2>
                    <Button
                        onClick={onClickIsOpenEmailModal}
                        buttonText='send to your mail'
                        disabled={!userList.length && "disabled"}
                    />
                </div>
            </Paper>
            {isOpenEmailModal && (
                <Modal
                    title='Enter your email'
                    onClose={onClickIsOpenEmailModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <MyInput
                            label='enter your email'
                            inputClassName={classes.inputClassName}
                            onChange={(e) => onChangeEmailHandler(e)}
                            onBlur={blurHandler}
                        />

                        <Button
                            onClick={onClikSendEmail}
                            buttonText='send to your mail'
                            disabled={userEmailError && "disabled"}
                        />
                    </div>
                    {userEmailDirty && userEmailError && (
                        <div className={classes.error}>{userEmailError}</div>
                    )}
                </Modal>
            )}
        </div>
    )
}

export default Header
