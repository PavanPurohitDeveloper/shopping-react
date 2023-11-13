import { NetflixHeader } from '../netflix-header/netflix-header';
import { NetflixMain } from '../netflix-main/netflix-main';
import { NetflixRegister } from '../netflix-register/netflix-register';
import './netflix-index.css';

export function NetflixIndex() {
    return (
        <div id="banner">
            <div id="shade">
                <NetflixHeader></NetflixHeader>
                <main>
                    <div>
                        <NetflixMain></NetflixMain>
                    </div>
                </main>
                {/* <div className="w-75 text-center">
                    <NetflixRegister></NetflixRegister>
                </div> */}
            </div>
        </div>
    );
}