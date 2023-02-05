import { useAppDispatch } from '@/store/index'
import { setFite } from '@/store/modules/file'

import photo from '@/assets/images/img/img_photo.svg'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const UploadMain: React.FC = () => {
  const [file, setFile] = useState<string>('')
  const [numPages, setNumPages] = useState(0)
  const [fileName, setFileName] = useState('')
  const container = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()

  const handleFile = (file: FileList) => {
    const reader = new FileReader()
    if (file) {
      setFileName(file[0].name)
      reader.readAsDataURL(file[0])
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          setFile(e.target.result as string)
          dispatch(setFite(e.target.result))
        }
      }
    }
  }

  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    handleFile(file as FileList)
  }

  const removeFile = () => {
    setFile('')
    dispatch(setFite(''))
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const handleEvent = (e: DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  useEffect(() => {
    container.current?.addEventListener('dragenter', (e) => {
      container.current?.classList.add('outline-primary')
      handleEvent(e)
    })
    container.current?.addEventListener('dragleave', (e) => {
      container.current?.classList.remove('outline-primary')
      handleEvent(e)
    })
    container.current?.addEventListener('dragover', (e) => {
      handleEvent(e)
    })
    container.current?.addEventListener('drop', (e) => {
      handleEvent(e)

      const dt = e.dataTransfer
      const files = dt?.files

      handleFile(files as FileList)
      container.current?.classList.remove('outline-primary')
    })
  }, [])
  return (
    <div
      ref={container}
      className="mt-10 flex h-[calc(100%_-_90px)] flex-col items-center justify-center rounded-xl outline-dashed outline-light"
    >
      {file ? (
        <>
          {file.includes('data:application/pdf') ? (
            <>
              <div className="relative">
                <Document className={'border border-black'} file={file} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page width={300} pageNumber={1} />
                </Document>
                <i className="bi bi-x-circle absolute -top-6 -right-4 cursor-pointer text-2xl" onClick={removeFile}></i>
              </div>
              <p className="text-2xl">{fileName}</p>
              <p className="text-gray">{numPages}頁</p>
            </>
          ) : (
            <>
              <div className="relative">
                <img className="mx-auto w-[300px]" src={file} alt="file" />
                <i className="bi bi-x-circle absolute -top-6 -right-4 cursor-pointer text-2xl" onClick={removeFile}></i>
              </div>
              <p className="text-2xl">{fileName}</p>
            </>
          )}
        </>
      ) : (
        <>
          <img src={photo} alt="uploadIcon" />
          <button className="relative mb-6 rounded-3xl border-2 border-primary bg-dark py-1 px-7 text-primary">
            <input
              className="absolute top-0 left-0 z-10 h-full w-full opacity-0"
              type="file"
              accept="application/,.jpg,.png,.pdf"
              onChange={getFile}
            />
            選擇檔案
          </button>
          <p className="mb-2 text-2xl text-gray">或者將檔案拖曳到這裡</p>
          <p className="text-gray">僅支援 PDF、JPG、PNG 檔案，且容量不超過 20MB。</p>
        </>
      )}
    </div>
  )
}

export default UploadMain
