import imageLeft from '../../assets/f-type-1.jpg';
import imageMid from '../../assets/card-image.jpg';
import imageRigth from '../../assets/f-type-3.jpg';

interface PhotoBanner {
    bannerUrl?: string;
}

export function BannerDescrib(props: PhotoBanner) {

    return(
        <div className="mt-3 mb-3 flex justify-center w-auto">
            <img className='pl-2 w-[480px] h-96' src={props.bannerUrl} alt="" />
        </div>
    )

}