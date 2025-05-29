import { useBlockProps } from '@wordpress/block-editor';
import editorPreview from './images/vision-editor-card.jpg';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() } className="alignfull">
			<img src={ editorPreview } alt="Vision Page Block Preview" />
		</div>
	);
}
