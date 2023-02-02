import photo from '@/assets/images/img/img_photo.svg'

const UploadMain: React.FC = () => {
  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // // console.log(e.target.files)
    // const file = e.target.files[0]
    // const reader = new FileReader()
    // if (file) {
    //   reader.readAsDataURL(file)
    //   // reader.onload = (e: any) => {
    //   //   console.log(e.target.result)
    //   // }
    // }
  }
  return (
    <div className="mt-10 flex h-[calc(100%_-_90px)] flex-col items-center justify-center rounded-xl outline-dashed outline-light">
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
    </div>
  )
}

export default UploadMain
