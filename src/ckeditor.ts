import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { Font } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { AutoImage,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    PictureEditing
} from '@ckeditor/ckeditor5-image';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';


class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Autoformat, BlockQuote, Bold, Heading, Image, ImageCaption,
		ImageStyle, ImageToolbar, Indent, Italic, Link, List,
		Paragraph, Table, TableToolbar, Alignment, AutoImage, AutoLink,
		Code, Essentials, FindAndReplace, Font, Highlight, HorizontalLine,
		HtmlEmbed, ImageInsert, ImageResize, ImageUpload, IndentBlock,
		LinkImage, ListProperties, TodoList, PageBreak, PasteFromOffice,
		PictureEditing, RemoveFormat, ShowBlocks,
		SpecialCharacters, SpecialCharactersEssentials, Strikethrough, Subscript, Superscript,
		TableCaption, TableCellProperties, TableColumnResize,
		TableProperties, TextTransformation,
		Underline
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
            items: [
                'undo', 'redo',
                '|',
                'showBlocks', 'findAndReplace', 'selectAll',
                '|',
                'heading',
                '|',
                'style',
                '|',
                'fontSize', 'fontFamily',
                {
                    label: 'Font color',
                    icon: 'plus',
                    items: [ 'fontColor', 'fontBackgroundColor' ]
                },
                '|',
                'bold', 'italic', 'underline',
                {
                    label: 'Formatting',
                    icon: 'text',
                    items: [ 'strikethrough', 'subscript', 'superscript', 'code', 'horizontalLine', '|', 'removeFormat' ]
                },
                'specialCharacters', 'pageBreak',
                '|',
                'link', 'insertImage', 'insertTable',
                'blockQuote',
                '-',
                'alignment',
                '|',
                'bulletedList',	'numberedList',	'todoList', 'outdent', 'indent'
            ],
            shouldNotGroupWhenFull: true
        },
        fontFamily: {
            supportAllValues: true
        },
        fontSize: {
            options: [ 10, 12, 14, 'default', 18, 20, 22 ],
            supportAllValues: true
        },
        image: {
            styles: {
				options: [
					'alignCenter',
					'alignLeft',
					'alignRight'
				]
			},
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                }
            ],
            toolbar: [
                'imageTextAlternative', 'toggleImageCaption', '|',
                'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|',
                'resizeImage', '|', 'ckboxImageEdit'
            ]
        },
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        placeholder: 'Type or paste your content here!',
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption'
            ]
        }
	};
}

export default Editor;
