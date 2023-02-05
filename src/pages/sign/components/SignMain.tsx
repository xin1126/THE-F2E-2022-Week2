import { useAppSelector } from '@/store/index'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { pdfjs, Document, Page } from 'react-pdf'
import jsPDF from 'jspdf'
import html2canvas from '../../../../node_modules/html2canvas'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
const pdf = new jsPDF()
const SignMain: React.FC = () => {
  const [numPages, setNumPages] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLInputElement>(null)
  const { file } = useAppSelector((state) => state.file)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const save = () => {
    html2canvas(containerRef.current as unknown as HTMLElement, { allowTaint: true }).then((canvas) => {
      const pageData = canvas.toDataURL('image/png', 1)
      pdf.addImage(pageData, 'png', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height)
      pdf.save('test pdf')
    })
  }

  const { editor, onReady } = useFabricJSEditor()

  const onAddText = () => {
    if (editor?.canvas) {
      editor.canvas.setWidth(containerRef.current?.offsetWidth as number)
      editor.canvas.setHeight(containerRef.current?.offsetHeight as number)
    }
    editor?.addText(textRef.current?.value as string)
  }
  return (
    <div className="mt-10 flex h-[calc(100%_-_90px)] items-center justify-center rounded-xl outline-dashed outline-light">
      <div>
        <button className="mr-2 rounded-xl bg-slate-700 px-2 py-1 text-white" onClick={save}>
          測試下載
        </button>
        <button className="mr-2 rounded-xl bg-slate-700 px-2 py-1 text-white" onClick={onAddText}>
          測試新增文字
        </button>
        <input className="mr-2 rounded-xl border border-primary py-1 pl-2" type="text" ref={textRef} />
      </div>
      <div className="relative" ref={containerRef}>
        {file.includes('data:application/pdf') ? (
          <>
            <Document
              className={'relative -z-20 border border-black'}
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page width={300} pageNumber={1} />
            </Document>
          </>
        ) : (
          <>
            <img className="mx-auto w-[300px]" src={file} alt="file" />
          </>
        )}
        <FabricJSCanvas className="absolute top-0 z-10" onReady={onReady} />
      </div>
    </div>
  )
}

export default SignMain
