class Album < ApplicationRecord
    validates :band_id, :name, presence: true
    validate :require_photo

    belongs_to :band,
    class_name: :User,
    foreign_key: :band_id

    has_many :songs
    

    has_one_attached :photo

    def self.top_results(string)
        string= string.downcase.split('').join('%')
        string = '%' + string + '%'
        Album.where('lower(name) LIKE ?', string).limit(5)
    end

    def require_photo
        if !self.photo.attached?
            file = File.open('app/assets/images/parallel_cropped.png')
            self.photo.attach(io: file, filename: '345892746528734589234728')
        end
    end
end
