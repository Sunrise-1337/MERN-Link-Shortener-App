import './loader.scss'

import LoaderStore from "../../../stores/loader.store"
import { observer } from 'mobx-react-lite'

const Loader = () => {

    return (
        LoaderStore.isLoading
            ?
                <div className="loader">
                    <div className="loader__spinner-container">
                        <span className="loader__spinner"></span>
                    </div>
                </div>        
            :
                <></>
    )
}

export default observer(Loader)