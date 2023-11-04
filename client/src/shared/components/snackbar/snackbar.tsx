import { VariableConstants } from '../../../constants/variables.constants';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import Slide, { SlideProps } from '@mui/material/Slide';
import SnackbarStore from '../../../stores/snackbar.store';
import { observer } from "mobx-react-lite";

const CustomSnackbar = () => {
    const handleSnackBarClose = (_event: React.SyntheticEvent | Event, reason?: string): void => {
      if (reason === 'clickaway') {
        return;
      }
  
      SnackbarStore.toHideSnackBar();
    };
    
    const transitionDirectionUp = (props: Omit<SlideProps, 'direction'>) => {
      return <Slide {...props} direction="up" />;
    }

    return (
        SnackbarStore.message
            ?
              <Snackbar open={!!SnackbarStore.message} autoHideDuration={VariableConstants.snackbarDuration}
                      onClose={handleSnackBarClose} 
                      anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right"
                      }}
                      TransitionComponent={transitionDirectionUp}>
                  <Alert severity={SnackbarStore.type}>
                      <p dangerouslySetInnerHTML={{
                              __html: SnackbarStore.message
                          }} style={{display: 'contents'}}></p>
                  </Alert>
              </Snackbar>     
            :
                <></>
    )
}

export default observer(CustomSnackbar)