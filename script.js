document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            title: "Introduction to Phishing Attacks",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-bold text-lg mb-2">What is Phishing?</h3>
                        <p>Phishing is a cyberattack that uses disguised email, websites, or messages to trick victims into revealing sensitive information or installing malware. It's one of the oldest and most prevalent forms of cybercrime.</p>
                        <img src="http://static.photos/technology/640x360/1" alt="Phishing illustration" class="slide-image mt-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-2">Why Study Phishing?</h3>
                        <ul class="list-disc pl-5 space-y-2">
                            <li>Accounts for 90% of data breaches</li>
                            <li>Costs businesses billions annually</li>
                            <li>Constantly evolving tactics</li>
                            <li>Affects individuals and organizations alike</li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg mt-4">
                            <p class="text-blue-800"><span class="font-bold">Did you know:</span> The first known phishing attack dates back to the mid-1990s, targeting AOL users.</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Historical Evolution of Phishing",
            content: `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">1995-2000</div>
                    <p>The "AOL Phishing" era where attackers posed as AOL employees to steal user credentials via instant messages and emails.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2001-2005</div>
                    <p>Phishing expands beyond AOL to target financial institutions. First known phishing attack against a bank (Target: E-gold) in 2001.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2006-2010</div>
                    <p>Spear phishing emerges, targeting specific individuals or organizations. Rise of phishing toolkits making attacks easier to deploy.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2011-2015</div>
                    <p>Social media phishing grows. Major breaches like the 2011 RSA attack via spear phishing email with Excel attachment.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2016-Present</div>
                    <p>AI-powered phishing, voice phishing (vishing), and sophisticated business email compromise (BEC) scams dominate the landscape.</p>
                </div>
            `
        },
        {
            title: "Phishing Attack Statistics",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-bold text-lg mb-2">By the Numbers</h3>
                        <ul class="space-y-3">
                            <li class="p-3 bg-gray-50 rounded-lg"><span class="font-bold">3.4 billion</span> phishing emails sent daily</li>
                            <li class="p-3 bg-gray-50 rounded-lg"><span class="font-bold">1 in 99</span> emails is a phishing attack</li>
                            <li class="p-3 bg-gray-50 rounded-lg"><span class="font-bold">74%</span> of organizations in US experienced phishing attacks</li>
                            <li class="p-3 bg-gray-50 rounded-lg"><span class="font-bold">30%</span> of phishing messages get opened</li>
                            <li class="p-3 bg-gray-50 rounded-lg"><span class="font-bold">$4.65 million</span> average cost of phishing attack to businesses</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-2">Most Targeted Industries</h3>
                        <div class="bg-white p-4 rounded-lg shadow">
                            <div class="flex justify-between mb-1">
                                <span>Financial Services</span>
                                <span>45%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-4">
                                <div class="bg-blue-600 h-4 rounded-full" style="width:45%"></div>
                            </div>
                            
                            <div class="flex justify-between mb-1 mt-3">
                                <span>Healthcare</span>
                                <span>22%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-4">
                                <div class="bg-blue-600 h-4 rounded-full" style="width:22%"></div>
                            </div>
                            
                            <div class="flex justify-between mb-1 mt-3">
                                <span>Technology</span>
                                <span>15%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-4">
                                <div class="bg-blue-600 h-4 rounded-full" style="width:15%"></div>
                            </div>
                            
                            <div class="flex justify-between mb-1 mt-3">
                                <span>Retail</span>
                                <span>10%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-4">
                                <div class="bg-blue-600 h-4 rounded-full" style="width:10%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Phishing Techniques and Types",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div class="bg-white p-4 rounded-lg shadow mb-4">
                            <h3 class="font-bold text-lg mb-2 text-red-600">Email Phishing</h3>
                            <p>Mass emails pretending to be from legitimate companies requesting sensitive information.</p>
                            <img src="http://static.photos/office/640x360/1" alt="Email phishing" class="slide-image mt-2">
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg shadow mb-4">
                            <h3 class="font-bold text-lg mb-2 text-red-600">Spear Phishing</h3>
                            <p>Targeted attacks against specific individuals or organizations using personalized information.</p>
                        </div>
                    </div>
                    <div>
                        <div class="bg-white p-4 rounded-lg shadow mb-4">
                            <h3 class="font-bold text-lg mb-2 text-red-600">Whaling</h3>
                            <p>Targeting high-profile executives (CEOs, CFOs) with sophisticated attacks.</p>
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg shadow mb-4">
                            <h3 class="font-bold text-lg mb-2 text-red-600">Smishing & Vishing</h3>
                            <p>SMS phishing (smishing) and voice call phishing (vishing) using phone-based techniques.</p>
                            <img src="http://static.photos/technology/640x360/2" alt="Smishing" class="slide-image mt-2">
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Future of Phishing & Innovations",
            content: `
                <div class="space-y-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="font-bold text-lg mb-2">AI-Powered Phishing</h3>
                        <p>Attackers are using machine learning to craft more convincing messages and automate target selection, making traditional detection methods less effective.</p>
                    </div>
                    
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h3 class="font-bold text-lg mb-2">Defensive Innovations</h3>
                        <ul class="list-disc pl-5 space-y-2">
                            <li>Behavioral biometrics to detect anomalies</li>
                            <li>AI-based email filtering systems</li>
                            <li>Improved phishing awareness training using VR</li>
                            <li>Blockchain-based email authentication</li>
                            <li>Real-time URL analysis tools</li>
                        </ul>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h3 class="font-bold text-lg mb-2">Predictions for 2030</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-medium">Threats</h4>
                                <ul class="list-disc pl-5">
                                    <li>Deepfake voice phishing</li>
                                    <li>AR/VR environment attacks</li>
                                    <li>AI-generated personalized content</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-medium">Defenses</h4>
                                <ul class="list-disc pl-5">
                                    <li>Universal phishing reporting systems</li>
                                    <li>Decentralized identity verification</li>
                                    <li>Continuous authentication</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Protection and Prevention",
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-bold text-lg mb-2">For Individuals</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="text-green-500 mr-2"></i>
                                <span>Verify sender email addresses carefully</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="text-green-500 mr-2"></i>
                                <span>Hover over links before clicking</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="text-green-500 mr-2"></i>
                                <span>Use multi-factor authentication</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="text-green-500 mr-2"></i>
                                <span>Keep software updated</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="text-green-500 mr-2"></i>
                                <span>Report suspicious emails</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-2">For Organizations</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i data-feather="shield" class="text-blue-500 mr-2"></i>
                                <span>Implement advanced email filtering</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="shield" class="text-blue-500 mr-2"></i>
                                <span>Conduct regular phishing simulations</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="shield" class="text-blue-500 mr-2"></i>
                                <span>Enforce strict access controls</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="shield" class="text-blue-500 mr-2"></i>
                                <span>Develop incident response plans</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="shield" class="text-blue-500 mr-2"></i>
                                <span>Invest in continuous security training</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-6 bg-yellow-50 p-4 rounded-lg">
                    <h3 class="font-bold text-lg mb-2 text-yellow-800">Remember:</h3>
                    <p class="text-yellow-800">The best defense against phishing is a combination of technology and user awareness. No single solution can provide complete protection.</p>
                </div>
            `
        }
    ];

    // Initialize slide show
    let currentSlide = 0;
    const slideContainer = document.getElementById('slide-container');
    const indicatorsContainer = document.getElementById('slide-indicators');

    // Create slides and indicators
    function initializeSlides() {
        slides.forEach((slide, index) => {
            // Create slide element
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
            slideElement.innerHTML = `
                <h2 class="slide-title">${slide.title}</h2>
                <div class="slide-content">
                    ${slide.content}
                </div>
            `;
            slideContainer.appendChild(slideElement);

            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });

        feather.replace();
    }

    // Navigation functions
    function goToSlide(index) {
        if (index < 0 || index >= slides.length) return;
        
        document.querySelector('.slide.active').classList.remove('active');
        document.querySelector('.indicator.active').classList.remove('active');
        
        const slidesArray = document.querySelectorAll('.slide');
        const indicatorsArray = document.querySelectorAll('.indicator');
        
        slidesArray[index].classList.add('active');
        indicatorsArray[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    // Event listeners
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    initializeSlides();
});