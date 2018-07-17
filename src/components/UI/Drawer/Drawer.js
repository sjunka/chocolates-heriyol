// React Imports
import React from "react";
import PropTypes from "prop-types";

// Material UI components
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {
    mailFolderListItems,
} from "../../../tileData";

// React Router

const styles = {
    list: {
        width: 250
    },
    listFull: {
        width: "auto"
    }
};

class TemporaryDrawer extends React.Component {
    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <div className={classes.fullList}>
                    <List>{mailFolderListItems}</List>
                </div>
            </div>
        );

        return (
            <div>
                <Drawer
                    transitionDuration={this.props.transitionDuration}
                    open={this.props.openDrawer}
                    onClose={this.props.onClose}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.onClose}
                        onKeyDown={this.props.onClose}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
