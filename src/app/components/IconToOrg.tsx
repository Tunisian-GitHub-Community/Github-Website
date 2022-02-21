import React from 'react';

/* This is the Component that shows a Small Logo on left side of the websoite */
function IconToOrg() {
  return (
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
      <div>
        <a
          title="Our Github"
          href="https://github.com/Tunisian-GitHub-Community"
          target="Github Community"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            className="object-cover object-center w-full h-full rounded-full "
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default IconToOrg;
