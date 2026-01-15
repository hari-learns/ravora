import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    href?: string;
    isComingSoon?: boolean;
}

export default function ProjectCard({ title, description, href, isComingSoon }: ProjectCardProps) {
    const CardContent = (
        <div className={`${styles.card} ${isComingSoon ? styles.comingSoon : ''}`}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.arrow}>
                {isComingSoon ? (
                    <span className={styles.badge}>Coming Soon</span>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
        </div>
    );

    if (href && !isComingSoon) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.linkWrapper}>
                {CardContent}
            </Link>
        );
    }

    return <div className={styles.linkWrapper}>{CardContent}</div>;
}
