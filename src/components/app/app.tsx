import { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from './../../constants/articleProps';
import styles from './app.module.scss';

export const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [appliedState, setAppliedState] = useState(defaultArticleState);

	const handleToggle = () => setIsOpen((v) => !v);
	const handleClose = () => setIsOpen(false);
	const handleApply = (newState: typeof defaultArticleState) => {
		setAppliedState(newState);
		setIsOpen(false);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedState.fontFamilyOption.value,
					'--font-size': appliedState.fontSizeOption.value,
					'--font-color': appliedState.fontColor.value,
					'--container-width': appliedState.contentWidth.value,
					'--bg-color': appliedState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				appliedState={appliedState}
				initialState={defaultArticleState}
				onToggle={handleToggle}
				onClose={handleClose}
				onApply={handleApply}
			/>
			<Article />
		</main>
	);
};
