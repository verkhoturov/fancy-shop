import Link from 'next/link';
import styles from './Ordered.module.scss';
import Image from 'next/image';


export const SuccessModal = () => {
	return (
		<div className={styles.success}>
			<div className={styles.success_img}>
				<Image src="/bag.svg" alt="" width={110} height={110} />
			</div>
			<div className={styles.success_title}>
				Your order has been placed!
			</div>
			<div className={styles.success_text}>
				You will be informed about the further <br/> status of your order by email
			</div>

			<Link href="/" legacyBehavior>
				<a className={`button ${styles.success_btn}`}>
					To the main page
				</a>
			</Link>
		</div>
	)
}
