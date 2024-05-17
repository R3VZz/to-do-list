import { motion } from "framer-motion";

const Help = () =>{
    return (
        <div className="help-text">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} >
                Enter a task in the input field and click add task
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} >
                To mark a task as completed, simply click it and it will be crossed off
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} >
                To delete a task, click the delete button that appears next to a task
            </motion.p>
        </div>
    )
}

export default Help;
