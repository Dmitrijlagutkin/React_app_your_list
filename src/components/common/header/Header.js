import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../button/Button"
import useStyles from "./headerStyles"
import Paper from "@material-ui/core/Paper"
import Modal from "../modal/Modal"
import MyInput from "../input/Input"
import { setTest } from "../../../redux/reducers/reducer"

const Header = ({ titleText }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [isOpenEmailModal, setIsOpenEmailModal] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const onClickIsOpenEmailModal = () => {
        dispatch(setTest(true))
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
                            onChange={(e) => setUserEmail(e.target.value)}
                        />

                        <Button
                            onClick={onClickIsOpenEmailModal}
                            buttonText='send to your mail'
                            disabled={!userEmail && true}
                        />
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Header
