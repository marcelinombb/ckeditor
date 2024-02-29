
const templateTextarea = document.querySelector(".document-editor__editable");
const toolbarContainer = document.querySelector(".document-editor__toolbar");
const editorContainer = document.querySelector('.document-editor__editable-container');
ClassicEditor
	.create( templateTextarea, {
		// Editor configuration.
	} )
	.then( editor => {
		toolbarContainer.appendChild(editor.ui.view.toolbar.element);
		window.editor = editor;
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "wvbt4ywl3d2m-upiutjcxspx3" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
