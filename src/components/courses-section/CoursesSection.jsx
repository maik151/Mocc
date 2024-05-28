import React, { useState, useContext } from 'react';
import CoursesBox from '../../components/courses-box/CoursesBox';
import Tabs from '../tabs/Tabs';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { FetchState, Data } from '../../App';
import styles from './CoursesSection.module.css'

function CoursesSection() {
	const [currentTab, setCurrentTab] = useState('python_res');
	const fetched = useContext(FetchState);
	const coursesData = useContext(Data);

	return (
		<div id='courses-section' className={styles.coursesSection}>
			<h2 className={styles.coursesSectionTitle}>
			Una amplia selección de cursos.
			</h2>
			<p>
			    Elija entre cursos en vídeo en línea con nuevas incorporaciones
				publicado cada mes
			</p>
			<Tabs setCurrentTab={setCurrentTab} />
			{fetched ? (
				<CoursesBox sectionData={coursesData[currentTab]} />
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}

export default CoursesSection;
