import { useState } from "react"
import Button from "../button/Button"
import useStyles from "./headerStyles"
import Paper from "@material-ui/core/Paper"
import Modal from "../modal/Modal"

const Header = ({ titleText }) => {
    const classes = useStyles()
    const [isOpenEmailModal, setIsOpenEmailModal] = useState(false)
    const onClickIsOpenEmailModal = () => setIsOpenEmailModal(!isOpenEmailModal)
    return (
        <div className={classes.root}>
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
                    <div>span</div>
                </Modal>
            )}
        </div>
    )
}

export default Header
