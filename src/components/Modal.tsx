import { useState } from "react";

const Modal = () => {
  const [shouldDisplay, setShouldDisplay] = useState(true);
  function cancelModal() {
    setShouldDisplay(false);
  }

  return shouldDisplay ? (
    <div className="relative flex justify-center ">
      <div
        className="fixed inset-0 z-10 overflow-y-auto bg-[#000000bb]"
        onClick={cancelModal}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-4 pb-4 text-center">
                  <h3
                    className="font-medium leading-6 text-xl mb-4 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    Project Confidentiality Notice
                  </h3>

                  <p className="mt-2 text-[.9rem] text-gray-700 dark:text-gray-400">
                    Due to non-disclosure agreements, I&apos;m unable to share
                    specific project details. If you have questions, please feel
                    free to schedule a meeting with me to discuss my skills and
                    expertise.
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
                <button
                  className="w-full px-4 py-2.5 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border-2 border-gray-200 rounded-full sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 mb-2 sm:mb-0"
                  onClick={cancelModal}
                >
                  Cancel
                </button>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendar.app.google/bBeCZXMknVz2FArE7"
                >
                  <button className="items-center justify-center w-full px-6 py-2.5 text-center text-slate-200 duration-200 bg-blue-500 border-2 border-blue-500 rounded-full inline-flex hover:bg-transparent hover:border-blue-500 hover:text-blue-500 focus:outline-none lg:w-auto focus-visible:outline-blue-500 text-sm font-medium focus-visible:ring-blue-500">
                    Schedule meeting &nbsp; →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
