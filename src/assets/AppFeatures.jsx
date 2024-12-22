import React from 'react'

const AppFeatures = () => {
  return (
    <section aria-label="App features" className="features">
    <div className="container">
       <div className="iphone">
        <img src="/images/iphone-tillted.svg" alt="an iphone with a creditcard out"/>
       </div>
       <div className="text space-y-1">
        <h2 className="h1">App Features</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam voluptatem beatae commodi corrupti laudantium eveniet, dolor aut autem obcaecati praesentium, veniam amet numquam unde itaque delectus natus, asperiores atque.</p>
        <div className="features-grid">
            
            <div className="feature-card">
                <div className="icon-container">
                    <img src="/images/icons/credit-card.svg" alt=""/>
            </div>
                <div className="space-y-1">
                <h3 className="h5">Easy Payments</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>  
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src="/images/icons/shield.svg" alt=""/>
                </div>    
              <div>
                <div className="space-y-1">
                <h3 className="h5">Data Security</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
              </div>
              </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src="/images/icons/bars.svg" alt=""/>
                </div>
              <div>
                <div className="space-y-1">
                <h3 className="h5">Cost Statistics</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
              </div>
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src="/images/icons/communication.svg" alt=""/>
                </div>
                <div className="space-y-1">
                <h3 className="h5">Support 24/7</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>  
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src="/images/icons/wallet.svg" alt=""/>
                </div>
                <div className="space-y-1">
                <h3 className="h5">Regular Cashback</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>  
            </div>
            <div className="feature-card">
                <div className="icon-container">
                    <img src="/images/icons/happy.svg" alt=""/>
                </div>
                <div className="space-y-1">
                <h3 className="h5">Top Standards</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
              </div>  
            </div>
       </div>
    </div>
</section>
  )
}

export default AppFeatures